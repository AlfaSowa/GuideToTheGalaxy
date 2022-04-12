# Файловая система

### Папка pages

#### Именование папок

- pages
  - login.tsx
  - profile
    - classes
      - index.tsx
      - new.tsx
    - index.tsx
  - [chapter]
    - part.tsx
    - index.tsx

#### Нейминг в файлах страниц

- GTGPages
  - classes
    - class
      - new.tsx
      - class.tsx
      - class.module.scss
    - classes.tsx
    - classes.module.scss

#### Компоненты страниц

```javascript
//pages/user.tsx
const User: NextPage = () => {
  return <UserPage />;
};

export default User;
```

### Другие Компоненты

```javascript
interface ILogin {
  title?: string;
}

const Login: FC<ILogin> = ({ children, title }) => {
  return <LoginPage />;
};

Login.defaultProps = {
  title: null,
};

export default Login;
```
