import type { ModuleTypeEnum } from '@/store/reducers/moduleSlice'

export interface ITopBarProps {
  toggleSidebar: () => void
}

export interface ISidebarProps {
  moduleType: ModuleTypeEnum
}
