interface User {
  id: string;
  info: string;
}

interface PrivateUser {
  id: string;
  info: string;
  token: string;
}

const obj1: User = { id: '123', info: 'test-1' };
const obj2: PrivateUser = { id: '123', info: 'test-1', token: '' };

const fn = <T extends User | PrivateUser>(obj: T): T => {
  if ('token' in obj) {
    obj.token = 'test'
  }

  return obj;
};

const res1 = fn(obj1);

const res2 = fn(obj2);
