import { ComponentRegistry, WorkspaceStore } from 'mailspring-exports';
import RightSidebarDemo from './right-sidebar-demo';

export function activate() {
  ComponentRegistry.register(RightSidebarDemo, { role: 'RightSidebar:Demo'});
}

export function deactivate() {
  ComponentRegistry.unregister(RightSidebarDemo);
}
