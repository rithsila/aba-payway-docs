import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-extrabold text-sm tracking-tight inline-flex items-center gap-1.5 text-neutral-900 dark:text-white">
          <svg className="w-5 h-5 rounded-sm" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <rect width="512" height="512" rx="112" fill="#005C8A"/>
            <rect x="128" y="128" width="104" height="104" rx="24" fill="#00B2E3"/>
            <rect x="280" y="128" width="104" height="104" rx="24" fill="#00B2E3"/>
            <rect x="128" y="280" width="104" height="104" rx="24" fill="#00B2E3"/>
            <path d="M280 332 h104 v52 h-104 z" fill="#00B2E3"/>
            <path d="M332 280 h52 v52 h-52 z" fill="#00B2E3"/>
          </svg>
          <span className="text-[#005C8A] dark:text-[#00B2E3]">ABA</span>
          <span>PayWay SDK</span>
        </span>
      ),
      enableSearch: false,
    },
    disableThemeSwitch: true,
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
