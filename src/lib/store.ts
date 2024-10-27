import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ... (previous interfaces remain the same)

interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
  members: number;
}

interface ProjectState {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'progress' | 'members'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
}

interface UserState {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
}

// ... (previous stores remain the same)

export const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      projects: [],
      addProject: (project) => {
        const newProject: Project = {
          ...project,
          id: crypto.randomUUID(),
          progress: 0,
          members: 0,
        };
        set((state) => ({ projects: [...state.projects, newProject] }));
      },
      updateProject: (id, updatedProject) => {
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id ? { ...project, ...updatedProject } : project
          ),
        }));
      },
      deleteProject: (id) => {
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        }));
      },
    }),
    {
      name: 'project-storage',
    }
  )
);

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      users: [],
      addUser: (user) => {
        const newUser: User = {
          ...user,
          id: crypto.randomUUID(),
        };
        set((state) => ({ users: [...state.users, newUser] }));
      },
      updateUser: (id, updatedUser) => {
        set((state) => ({
          users: state.users.map((user) =>
            user.id === id ? { ...user, ...updatedUser } : user
          ),
        }));
      },
      deleteUser: (id) => {
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        }));
      },
    }),
    {
      name: 'user-storage',
    }
  )
);