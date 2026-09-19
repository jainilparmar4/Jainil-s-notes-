import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Sparkles,
  BookOpen,
  FastForward,
  Rewind,
  FileText,
  CheckCircle2,
  Video,
  Film,
  Search,
  X,
  ChevronRight,
  Printer,
  SlidersHorizontal,
  Flame,
  Clock,
  GraduationCap
} from 'lucide-react';
import { ChapterVideo, VideoScene, ClassLevel, AnimationType } from '../types';
import { ALL_CHAPTER_VIDEOS, CURATED_CHAPTER_VIDEOS } from '../data/videoLessonsData';
import { CHAPTER_NOTES } from '../data/class10NotesData';
import { AnimatedVisualCanvas } from './video/AnimatedVisualCanvas';

interface AiVideoGeneratorProps {
  initialChapterId?: string;
  onOpenNotes?: (chapterId: string) => void;
  onOpenPlayStoreGuide?: () => void;
}

export const AiVideoGenerator: React.FC<AiVideoGeneratorProps> = ({
  initialChapterId,
  onOpenNotes,
  onOpenPlayStoreGuide,
}) => {
  // Video collection state (Comprehensive library for all chapters + dynamically generated)
  const [videos, setVideos] = useState<ChapterVideo[]>(ALL_CHAPTER_VIDEOS);

  // Selected active video
  const [selectedVideo, setSelectedVideo] = useState<ChapterVideo>(() => {
    if (initialChapterId) {
      const match = ALL_CHAPTER_VIDEOS.find((v) => v.chapterId === initialChapterId);
      if (match) return match;
    }
    return ALL_CHAPTER_VIDEOS[0];
  });

  // Playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [sceneElapsedTime, setSceneElapsedTime] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showSubtitles, setShowSubtitles] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Filters
  const [selectedClass, setSelectedClass] = useState<'ALL' | ClassLevel>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // AI Generator Modal state
  const [isGeneratorOpen, setIsGeneratorOpen] = useState<boolean>(false);
  const [genTopic, setGenTopic] = useState<string>('');
  const [genSubject, setGenSubject] = useState<string>('Science');
  const [genClass, setGenClass] = useState<ClassLevel>(10);
  const [genLang, setGenLang] = useState<'hinglish' | 'hindi' | 'english'>('hinglish');
  const [genAnimation, setGenAnimation] = useState<AnimationType | 'auto'>('auto');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [genError, setGenError] = useState<string | null>(null);

  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Active scene
  const activeScene: VideoScene = selectedVideo.scenes[currentSceneIndex] || selectedVideo.scenes[0];

  // If initialChapterId prop changes from parent (e.g. clicked from Notes), load that video
  useEffect(() => {
    if (initialChapterId) {
      const found = videos.find((v) => v.chapterId === initialChapterId);
      if (found) {
        setSelectedVideo(found);
        setCurrentSceneIndex(0);
        setSceneElapsedTime(0);
        setIsPlaying(true);
      } else {
        // Find corresponding chapter from notes data and auto-generate or load fallback
        const chData = CHAPTER_NOTES.find((c) => c.id === initialChapterId);
        if (chData) {
          handleQuickGenerateForChapter(chData.chapterTitle, chData.subject, (chData.classLevel as ClassLevel) || 10);
        }
      }
    }
  }, [initialChapterId]);

  // SpeechSynthesis Web Speech Audio Narration
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    if (!isMuted && isPlaying && activeScene && activeScene.narrationText) {
      try {
        const utterance = new SpeechSynthesisUtterance(activeScene.narrationText);
        utterance.rate = playbackRate * 0.95;
        utterance.pitch = 1.0;

        // Pick an Indian or Hindi-friendly voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(
          (v) =>
            v.lang.includes('hi') ||
            v.lang.includes('IN') ||
            v.name.includes('India') ||
            v.name.includes('Hindi')
        );
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        utterance.onend = () => {
          // Finished speaking this scene
        };

        speechSynthRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('SpeechSynthesis error:', e);
      }
    }

    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentSceneIndex, selectedVideo.id, isPlaying, isMuted, playbackRate]);

  // Scene Timer Loop
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setSceneElapsedTime((prev) => {
          const sceneDuration = activeScene.durationSec || 30;
          if (prev + 1 >= sceneDuration) {
            // Next scene or loop
            if (currentSceneIndex < selectedVideo.scenes.length - 1) {
              setCurrentSceneIndex((idx) => idx + 1);
              return 0;
            } else {
              // Video ended
              setIsPlaying(false);
              return sceneDuration;
            }
          }
          return prev + 1;
        });
      }, 1000 / playbackRate);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentSceneIndex, activeScene, selectedVideo, playbackRate]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      if (isPlaying) {
        window.speechSynthesis.pause();
      } else {
        window.speechSynthesis.resume();
      }
    }
    setIsPlaying(!isPlaying);
  };

  // Jump to specific scene
  const handleJumpScene = (index: number) => {
    setCurrentSceneIndex(index);
    setSceneElapsedTime(0);
    setIsPlaying(true);
  };

  // Rewind / Forward 10s
  const handleSeek = (offsetSec: number) => {
    setSceneElapsedTime((prev) => {
      const newTime = prev + offsetSec;
      if (newTime < 0) {
        if (currentSceneIndex > 0) {
          setCurrentSceneIndex((i) => i - 1);
          return 0;
        }
        return 0;
      }
      if (newTime > activeScene.durationSec) {
        if (currentSceneIndex < selectedVideo.scenes.length - 1) {
          setCurrentSceneIndex((i) => i + 1);
          return 0;
        }
        return activeScene.durationSec;
      }
      return newTime;
    });
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // AI Video Generation Handler
  const handleGenerateVideo = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!genTopic.trim()) return;

    setIsGenerating(true);
    setGenError(null);

    try {
      const res = await fetch('/api/gemini/generate-video-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: genTopic.trim(),
          subject: genSubject,
          classLevel: genClass,
          language: genLang,
          preferredAnimation: genAnimation,
        }),
      });

      const data = await res.json();
      if (data && data.video) {
        setVideos((prev) => [data.video, ...prev]);
        setSelectedVideo(data.video);
        setCurrentSceneIndex(0);
        setSceneElapsedTime(0);
        setIsPlaying(true);
        setIsGeneratorOpen(false);
      } else {
        setGenError('Failed to generate video lesson. Please try again.');
      }
    } catch (err: any) {
      console.error(err);
      setGenError('Error contacting AI animation server. Check network connection.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Quick generation from chapter title
  const handleQuickGenerateForChapter = async (title: string, subject: string, cls: ClassLevel) => {
    setGenTopic(title);
    setGenSubject(subject);
    setGenClass(cls);
    setIsGeneratorOpen(true);
  };

  // Filtered Video Library
  const filteredVideos = videos.filter((v) => {
    if (selectedClass !== 'ALL' && v.classLevel !== selectedClass) return false;
    if (selectedSubject !== 'ALL' && v.subject.toLowerCase() !== selectedSubject.toLowerCase()) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        v.chapterTitle.toLowerCase().includes(q) ||
        v.subject.toLowerCase().includes(q) ||
        v.tagline.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Studio Banner & AI Action Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-indigo-900/60 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 uppercase tracking-wide flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                AI Video Studio 2026
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                4K Animated Board Simulations
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Audio Voiceover Included
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              AI Animated Chapter Videos & Simulations
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed font-medium">
              हर चैप्टर का कॉन्सेप्ट अब 2D/3D एनिमेशन, लाइव सर्किट, लेंस रे-ऑप्टिक्स, केमिकल बीकर सिमुलेशन और AI वॉइस नरेशन के साथ देखें! किसी भी टॉपिक का नया वीडियो तुरंत बनाएं।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {onOpenPlayStoreGuide && (
              <button
                id="btn-open-playstore-from-video"
                onClick={onOpenPlayStoreGuide}
                className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
              >
                <Play className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Play Store Guide</span>
              </button>
            )}

            <button
              id="btn-open-video-generator"
              onClick={() => {
                setGenTopic('');
                setIsGeneratorOpen(true);
              }}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-extrabold text-sm shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '4s' }} />
              <span>Generate AI Video (नया वीडियो बनाएं)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Animated Video Player Section */}
      <div
        ref={videoContainerRef}
        className={`bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col ${
          isFullscreen ? 'p-4 justify-between h-screen' : ''
        }`}
      >
        {/* Video Player Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Film className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                  Class {selectedVideo.classLevel}th
                </span>
                <span className="text-indigo-300 font-semibold">{selectedVideo.subject}</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> Scene {currentSceneIndex + 1} of {selectedVideo.scenes.length}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white truncate mt-0.5">
                {selectedVideo.chapterTitle}: {activeScene.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenNotes && selectedVideo.chapterId && (
              <button
                onClick={() => onOpenNotes(selectedVideo.chapterId)}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-bold flex items-center gap-1.5 cursor-pointer no-print"
                title="Open Chapter Notes"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Chapter Notes</span>
              </button>
            )}

            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Fullscreen Mode"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative w-full bg-slate-950 flex items-center justify-center overflow-hidden">
          <AnimatedVisualCanvas
            animationType={activeScene.animationType}
            scene={activeScene}
            isPlaying={isPlaying}
            playbackRate={playbackRate}
          />

          {/* Overlaid Animated Subtitle Pill */}
          {showSubtitles && activeScene.subtitles && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-12 sm:right-12 text-center pointer-events-none animate-fadeIn">
              <span className="inline-block px-4 py-2 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-white text-xs sm:text-sm font-semibold shadow-lg max-w-3xl">
                🗣️ {activeScene.subtitles}
              </span>
            </div>
          )}
        </div>

        {/* Video Control Dashboard */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 space-y-4">
          {/* Progress Seek Scrubber */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-white font-bold">
                {Math.floor(sceneElapsedTime / 60)}:
                {Math.floor(sceneElapsedTime % 60)
                  .toString()
                  .padStart(2, '0')}
              </span>
              <span className="text-indigo-300 font-semibold">{activeScene.title}</span>
              <span>
                {Math.floor(activeScene.durationSec / 60)}:
                {Math.floor(activeScene.durationSec % 60)
                  .toString()
                  .padStart(2, '0')}
              </span>
            </div>

            <div
              className="relative w-full h-2.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setSceneElapsedTime(Math.floor(pos * activeScene.durationSec));
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-indigo-500 rounded-full transition-all"
                style={{ width: `${(sceneElapsedTime / activeScene.durationSec) * 100}%` }}
              />
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Play, Pause, Rewind, FastForward */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSeek(-10)}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                title="Rewind 10s"
              >
                <Rewind className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlay}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                <span>{isPlaying ? 'Pause' : 'Play Video'}</span>
              </button>

              <button
                onClick={() => handleSeek(10)}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                title="Forward 10s"
              >
                <FastForward className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentSceneIndex(0);
                  setSceneElapsedTime(0);
                  setIsPlaying(true);
                }}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                title="Restart Video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Audio Voiceover, Speed, Subtitles */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  !isMuted
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-slate-800 text-slate-400'
                }`}
                title={isMuted ? 'Unmute AI Voiceover' : 'Mute AI Voiceover'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isMuted ? 'Voice Muted' : 'AI Voice On'}</span>
              </button>

              <button
                onClick={() => setShowSubtitles(!showSubtitles)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  showSubtitles
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                CC Subtitles
              </button>

              {/* Speed Selector */}
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
                {[0.75, 1, 1.25, 1.5].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setPlaybackRate(rate)}
                    className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      playbackRate === rate
                        ? 'bg-amber-400 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scene Navigation Tabs */}
          <div className="pt-2 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs text-slate-400 font-bold shrink-0">Scenes:</span>
            {selectedVideo.scenes.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => handleJumpScene(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  currentSceneIndex === idx
                    ? 'bg-amber-400 text-slate-950 shadow-sm ring-2 ring-amber-300'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{idx + 1}.</span>
                <span>{sc.title}</span>
              </button>
            ))}
          </div>

          {/* Active Scene Topper Tip Banner */}
          {activeScene.topperTip && (
            <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-amber-300 uppercase tracking-wide mr-2">
                  Board Exam Secret / Trap Alert:
                </span>
                <span>{activeScene.topperTip}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Video Library & Selector Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Video className="w-5 h-5 text-indigo-600" />
                All Chapter Animated Video Library (सम्पूर्ण वीडियो लाइब्रेरी)
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-extrabold">
                {filteredVideos.length} Videos
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              सभी चैप्टर्स के 3D एनिमेटेड सिमुलेशन और बोर्ड टॉपर ऑडियो लेसन्स उपलब्ध हैं:
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search all chapters or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Filter Pills (Classes & Subjects) */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
          {/* Class Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-xs font-bold text-slate-600 mr-1">Class:</span>
            {['ALL', 9, 10, 11, 12].map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls as any)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  selectedClass === cls
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cls === 'ALL' ? 'All Classes' : `Class ${cls}th`}
              </button>
            ))}
          </div>

          {/* Subject Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-xs font-bold text-slate-600 mr-1">Subject:</span>
            {['ALL', 'Science', 'Mathematics', 'Physics', 'Chemistry', 'Social Science', 'English'].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  selectedSubject === sub
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredVideos.map((vid) => {
            const isCurrent = selectedVideo.id === vid.id;
            return (
              <div
                key={vid.id}
                onClick={() => {
                  setSelectedVideo(vid);
                  setCurrentSceneIndex(0);
                  setSceneElapsedTime(0);
                  setIsPlaying(true);
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                  isCurrent
                    ? 'border-indigo-600 ring-2 ring-indigo-500/30'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Visual Thumbnail Banner */}
                <div className={`p-5 bg-gradient-to-tr ${vid.thumbnailGradient} text-white relative min-h-[140px] flex flex-col justify-between`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded bg-black/40 text-amber-300 font-mono text-[11px] font-bold backdrop-blur-xs">
                      Class {vid.classLevel}th • {vid.subject}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[11px] font-bold flex items-center gap-1 backdrop-blur-xs">
                      <Clock className="w-3 h-3" /> {Math.floor(vid.totalDurationSec / 60)}m {vid.totalDurationSec % 60}s
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center mb-2 transition-transform hover:scale-110 shadow-md">
                      <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                    </div>
                    <h4 className="font-extrabold text-base text-white line-clamp-1 leading-snug">
                      {vid.chapterTitle}
                    </h4>
                  </div>
                </div>

                {/* Card Content & Action */}
                <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {vid.tagline}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {vid.scenes.length} Animated Scenes
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(vid);
                        setCurrentSceneIndex(0);
                        setSceneElapsedTime(0);
                        setIsPlaying(true);
                        window.scrollTo({ top: 120, behavior: 'smooth' });
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                        isCurrent
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isCurrent ? 'Playing Now' : 'Watch Video'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Video Generator Modal */}
      {isGeneratorOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 no-print animate-fadeIn">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-white">
                    Generate AI Animated Video Lesson
                  </h3>
                  <p className="text-xs text-indigo-200">
                    Gemini AI 3.8 Flash Storyboard & Animated Engine
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsGeneratorOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleGenerateVideo} className="p-5 sm:p-6 space-y-4">
              {genError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 font-medium">
                  ⚠️ {genError}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Chapter or Specific Topic Name (चैप्टर या टॉपिक का नाम):
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chemical Reactions, Ohm's Law, Ray Optics, Photosynthesis..."
                  value={genTopic}
                  onChange={(e) => setGenTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Class Level:</label>
                  <select
                    value={genClass}
                    onChange={(e) => setGenClass(Number(e.target.value) as ClassLevel)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value={9}>Class 9th</option>
                    <option value={10}>Class 10th</option>
                    <option value={11}>Class 11th</option>
                    <option value={12}>Class 12th</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Subject:</label>
                  <select
                    value={genSubject}
                    onChange={(e) => setGenSubject(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Science">Science (PCB)</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Social Science">Social Science</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Voiceover Language:</label>
                  <select
                    value={genLang}
                    onChange={(e) => setGenLang(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="hinglish">Hinglish (Hindi + English)</option>
                    <option value="hindi">Pure Hindi (शुद्ध हिंदी)</option>
                    <option value="english">English</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Animation Engine:</label>
                  <select
                    value={genAnimation}
                    onChange={(e) => setGenAnimation(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="auto">Auto-Detect Concept Engine</option>
                    <option value="circuit">Electric Circuit (Electrons & Ohm)</option>
                    <option value="ray_optics">Ray Optics (Lenses & Mirrors)</option>
                    <option value="chemical_reaction">Chemical Beakers & Reactions</option>
                    <option value="math_parabola">Math Parabola & Coordinates</option>
                    <option value="biology_cell">Biology Cell & Photosynthesis</option>
                    <option value="atom_bohr">Bohr Atomic Shells & Orbits</option>
                    <option value="whiteboard">Topper Chalk Whiteboard</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsGeneratorOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isGenerating || !genTopic.trim()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Generating Animated Scenes...</span>
                    </>
                  ) : (
                    <>
                      <Video className="w-4 h-4" />
                      <span>Generate & Play Video (वीडियो बनाएं)</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
