```html
<h2>What is Frontend?</h2>
<ul>
  <li>
    Frontend is the part of the website that users can see and interact with.
  </li>
  <li>Frontend is also called <strong>client-side</strong>.</li>
  <li>Frontend is built with HTML, CSS, and JavaScript.</li>
</ul>
```

Turn the HTML above into React components and display



import React from 'react';

// Main Component
const FrontendInfo = () => (
  <div>
    <Header text="What is Frontend?" />
    <BulletList items={items} />
  </div>
);

// Header Component
const Header = ({ text }) => <h2>{text}</h2>;

// BulletList Component
const BulletList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <ListItem key={index} item={item} />
    ))}
  </ul>
);

// ListItem Component
const ListItem = ({ item }) => <li dangerouslySetInnerHTML={{ html: item }} />;

// Content for the list
const items = [
  "Frontend is the part of the website that users can see and interact with.",
  "Frontend is also called <strong>client-side</strong>.",
  "Frontend is built with HTML, CSS, and JavaScript.",
];

export default FrontendInfo;
