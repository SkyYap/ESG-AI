'use client';
import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';

export function SettingsNav({ items, ...props }) {
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6')} {...props}>
      {items.map((item) => (
        <Link href={item.link} className="text-sm font-medium transition-colors hover:text-primary">
          {item.title}
        </Link>
      ))}
    </nav>
  );
}