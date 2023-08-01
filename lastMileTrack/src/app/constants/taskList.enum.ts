export interface Task {
  name: string;
  isShowIcon: boolean;
  timer: number;
  startLat: number;
  startLon: number;
  endLat: number;
  endLon: number;
  groupId: GroupId;
  actionStartTime: any;
  actionEndTime: any;
}

export interface TaskData {
  taskList: Array<Object>;
  deliveryOption: string;
  experienceRating: string;
}

export enum TaskList {
  Task1 = 'Fahren zum naechsten Stopp',
  Task2 = 'Sortieren & Entnehmen',
  Task3 = 'Laufen',
  Task4 = 'Vor Gebauede warten',
  Task5 = 'Zustellen',
  Task6 = 'Sortieren & Zuruecklegen',
  Task7 = 'Fahrzeug schieben',
  Task8 = 'Sonstiges',
}

export enum GroupId {
  Group1 = 'Aktionen:',
}

export const taskListRecord: Record<TaskList, Task> = {
  [TaskList.Task1]: {
    groupId: GroupId.Group1,
    name: TaskList.Task1,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task2]: {
    groupId: GroupId.Group1,
    name: TaskList.Task2,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task3]: {
    groupId: GroupId.Group1,
    name: TaskList.Task3,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task4]: {
    groupId: GroupId.Group1,
    name: TaskList.Task4,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task5]: {
    groupId: GroupId.Group1,
    name: TaskList.Task5,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task6]: {
    groupId: GroupId.Group1,
    name: TaskList.Task6,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task7]: {
    groupId: GroupId.Group1,
    name: TaskList.Task7,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task8]: {
    groupId: GroupId.Group1,
    name: TaskList.Task8,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
};
