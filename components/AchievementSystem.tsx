'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Zap, Target } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  {
    id: 'explorer',
    title: 'Explorer',
    description: 'Visited all sections',
    icon: Target,
    unlocked: false,
  },
  {
    id: 'skill-master',
    title: 'Skill Master',
    description: 'Clicked on 5 skill orbs',
    icon: Star,
    unlocked: false,
  },
  {
    id: 'project-viewer',
    title: 'Project Viewer',
    description: 'Viewed 3 project details',
    icon: Trophy,
    unlocked: false,
  },
  {
    id: 'speed-reader',
    title: 'Speed Reader',
    description: 'Spent 30 seconds reading',
    icon: Zap,
    unlocked: false,
  },
];

export const AchievementSystem = () => {
  const [userAchievements, setUserAchievements] = useState<Achievement[]>(achievements);
  const [showPopup, setShowPopup] = useState<Achievement | null>(null);
  const [stats, setStats] = useState({
    sectionsVisited: new Set<string>(),
    skillsClicked: 0,
    projectsViewed: 0,
    timeSpent: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({ ...prev, timeSpent: prev.timeSpent + 1 }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unlockAchievement = (achievementId: string) => {
    setUserAchievements(prev => {
      const updated = prev.map(achievement => 
        achievement.id === achievementId && !achievement.unlocked
          ? { ...achievement, unlocked: true }
          : achievement
      );
      
      const newlyUnlocked = updated.find(a => a.id === achievementId && a.unlocked);
      if (newlyUnlocked && !prev.find(a => a.id === achievementId)?.unlocked) {
        setShowPopup(newlyUnlocked);
        setTimeout(() => setShowPopup(null), 3000);
      }
      
      return updated;
    });
  };

  useEffect(() => {
    // Check achievements
    if (stats.sectionsVisited.size >= 7) {
      unlockAchievement('explorer');
    }
    if (stats.skillsClicked >= 5) {
      unlockAchievement('skill-master');
    }
    if (stats.projectsViewed >= 3) {
      unlockAchievement('project-viewer');
    }
    if (stats.timeSpent >= 30) {
      unlockAchievement('speed-reader');
    }
  }, [stats]);

  // Global event listeners for tracking
  useEffect(() => {
    const handleSectionView = (sectionId: string) => {
      setStats(prev => ({
        ...prev,
        sectionsVisited: new Set([...prev.sectionsVisited, sectionId])
      }));
    };

    const handleSkillClick = () => {
      setStats(prev => ({ ...prev, skillsClicked: prev.skillsClicked + 1 }));
    };

    const handleProjectView = () => {
      setStats(prev => ({ ...prev, projectsViewed: prev.projectsViewed + 1 }));
    };

    // Add to window for global access
    (window as any).achievementSystem = {
      handleSectionView,
      handleSkillClick,
      handleProjectView,
    };

    return () => {
      delete (window as any).achievementSystem;
    };
  }, []);

  const unlockedCount = userAchievements.filter(a => a.unlocked).length;
  const totalCount = userAchievements.length;

  return (
    <>
      {/* Achievement Progress */}
      <div className="fixed top-4 left-4 z-50 glass-effect p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Trophy size={20} className="text-yellow-400" />
          <span className="text-sm font-semibold">{unlockedCount}/{totalCount}</span>
        </div>
        <div className="xp-bar">
          <div 
            className="xp-fill" 
            style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Achievement Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="achievement-popup show"
          >
            <div className="flex items-center space-x-3">
              <showPopup.icon size={24} />
              <div>
                <div className="font-bold">{showPopup.title}</div>
                <div className="text-sm opacity-80">{showPopup.description}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};