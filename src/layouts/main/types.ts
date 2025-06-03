import type { ModuleTypeEnum } from '@/store/reducers/moduleSlice'

export interface ITopBarProps {
  toggleSidebar: () => void
  layout: 'mobile' | 'desktop'
}

export interface ISidebarProps {
  moduleType: ModuleTypeEnum
}
