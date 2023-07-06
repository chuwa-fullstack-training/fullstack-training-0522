import React, { useEffect, useState } from "react";

function Clock() {
  const [datetime, setDatetime] = useState(new Date());

  // componentDidMount
  useEffect(() => {
    console.log("side effect where to setup interval");
    const intervalId = setInterval(() => setDatetime(new Date()), 1000);

    // componentWillUnmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // useEffect(() => {
  //   console.log("another effect");
  // });

  // console.log("inside function body");

  return <h1>{datetime.toLocaleTimeString()}</h1>;
}

export default function App() {
  return (
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}

/* GPT4 explanation
这段代码中定义了一个时钟组件（Clock）。这个组件显示当前的时间，并且每秒更新一次。

使用 useState Hook，创建一个状态变量 datetime 和对应的更新函数 setDatetime。初始值为当前的日期和时间。

使用 useEffect Hook，创建一个副作用函数。这个函数在组件挂载（即第一次渲染）时运行，同时由于依赖数组是空的（[]），所以这个副作用函数只会在组件挂载时运行一次，不会在后续的重新渲染中运行。

在副作用函数中，使用 setInterval 创建一个每秒执行一次的定时器。每次执行时，都会更新 datetime 的值为当前的日期和时间。

副作用函数返回一个清理函数。这个清理函数在组件卸载时运行，清理函数中使用 clearInterval 清除定时器，避免了因组件已卸载但定时器仍在运行而导致的问题。

在组件的 JSX 中，显示 datetime 的本地时间字符串。由于 datetime 的值每秒都在更新，所以这个组件会每秒重新渲染一次，显示的时间也会每秒更新一次。

此外，还定义了一个 App 组件，这个组件中使用了 <React.StrictMode> 包裹了 Clock 组件，这样在开发模式下 React 会对 Clock 组件及其所有子孙组件启用额外的检查和警告。

有一段被注释掉的代码，是一个没有任何依赖的 useEffect Hook，如果你取消注释，它会在每次渲染后都执行，因为它没有依赖数组。

整个应用程序在浏览器中运行时，会显示当前的时间，并且每秒更新一次。*/