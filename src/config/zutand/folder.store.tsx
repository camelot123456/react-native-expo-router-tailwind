import { create } from 'zustand';

const FOLDER_DATA_SAMPLE = [
  {
    id: '0e9e9c83-f2bd-470c-a0f6-2447901f8009',
    name: 'discuss',
    description: 'Determine candidate likely music mean add respond.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: '5d4ff0db-34f3-40b8-9033-f4da2eb3ae3b',
  },
  {
    id: 'e879bc3b-17bd-4dc8-9267-10f62539bd7b',
    name: 'story',
    description: 'Measure together must forget front small.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: null,
  },
  {
    id: 'f32118b0-ca93-463a-8584-1e8b912b787a',
    name: 'over',
    description: 'Course learn sense issue.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: 'a807e498-f4ca-4d9c-8e10-c9a20e47f047',
  },
  {
    id: 'f86c1a57-21ea-4f49-a053-988404fb592e',
    name: 'describe',
    description: 'Best thank interesting will suddenly interest human.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: null,
  },
  {
    id: 'ab931dee-4842-49d7-b833-c037d887c6d6',
    name: 'difficult',
    description: 'Main beautiful bad apply.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: 'f2b68b74-a0b3-4703-9006-bfbd4fb698f1',
  },
  {
    id: 'e1a1c935-3d95-429c-8e37-03249bb15809',
    name: 'film',
    description: 'While body artist section price stuff today.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: '7fb33432-4cec-44e3-a041-b363c6a6125d',
  },
  {
    id: '3e92b579-b31f-406d-b2bf-3ab7fbd6d029',
    name: 'oil',
    description: 'Practice if agency anyone for.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: '6ffff285-2b5a-4bda-8a48-02391f87c9e8',
  },
  {
    id: '6ec0b613-da47-458a-9886-841bebedbffc',
    name: 'window',
    description: 'Weight month like room condition.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: 'ee7c8422-3ac8-4b9d-bb09-fa8b4c6f643d',
  },
  {
    id: 'cdf415e1-f568-45df-98c6-145dfe51232e',
    name: 'billion',
    description: 'Behavior language former per drug improve less.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: '53c62cbb-17bb-46f2-bf40-2804e30235c9',
  },
  {
    id: '1dbdfa9c-cfdc-43e7-9d7f-0b730f531485',
    name: 'still',
    description: 'Feeling kid prove father of character.',
    image: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
    parentId: null,
  },
];

export type Folder = {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  parentId?: string | any;
};

type FolderStore = {
  folders: Folder[];
  folder: Folder;
  addFolder: (folder: Folder) => void;
  updateFolder: (folder: Folder) => void;
  deleteFolder: (id: string) => void;
  findFolder: (id: string) => Folder;
};

export const useFolderStore = create<FolderStore>((set, get) => ({
  folders: FOLDER_DATA_SAMPLE,
  addFolder: (folder) => {
    set((state) => ({ folders: [...state.folders, folder] }));
  },
  deleteFolder: (id: string) => {
    set((state) => ({
      folder: state.folder.id == id ? undefined : state.folder,
      folders: state.folders.filter((f) => f.id != id),
    }));
  },
  updateFolder: (folderModified: Folder) => {
    set((state) => {
      const folderUpdated = { ...state.folder, ...folderModified };
      const foldersUpdated = state.folders.map((f) => {
        return f.id == folderModified.id ? folderModified : f;
      });
      return { folder: folderUpdated, folders: foldersUpdated };
    });
  },
  findFolder: (id: string) => {
    const existing = get().folders.find((f) => f.id == id);
    set(() => ({ folder: existing }));
    return existing;
  },
}));
