import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-extrabold text-sm tracking-tight inline-flex items-center gap-1.5 text-neutral-900 dark:text-white">
          <span className="text-[#005C8A] dark:text-[#00B2E3]">ABA</span>
          <span>PayWay SDK</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
