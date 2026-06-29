---
создал заметку: 2024-06-06
tags:
  - react_js
  - ts
---
## Полиморфный компонент с типизаций
> [!note] 
> В tag помещаем просто текстовый компонент и типизация вообще отрабатывает 
```js
type IComponent3<T extends ElementType> = {
tag?: T;
children: ReactNode;

} & ComponentPropsWithoutRef<T>;
function Component5<T extends ElementType>({
tag,
children,
...rest
}: IComponent3<T>) {
const Component = tag || "div";
return <Component {...rest}>{children}</Component>;
}

export const Component3 = () => {
const [count, setCount] = useState(0);

return <Component5 tag="h1">Q3</Component5>;

};
```

