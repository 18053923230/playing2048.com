"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface GameLayoutWrapperProps {
  children: React.ReactNode;
}

export function GameLayoutWrapper({ children }: GameLayoutWrapperProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isGamePage, setIsGamePage] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // 检查是否是游戏页面
    const isGame =
      pathname.startsWith("/game/") || pathname.startsWith("/holiday/");
    setIsGamePage(isGame);
  }, [pathname]);

  // 如果是移动端游戏页面，只显示主要内容，隐藏页脚
  if (isMobile && isGamePage) {
    return (
      <div className="game-mobile-layout">
        {/* 只渲染第一个子元素（主要内容），跳过页脚 */}
        {Array.isArray(children) ? children[0] : children}
      </div>
    );
  }

  // 其他情况正常显示所有内容
  return <>{children}</>;
}
