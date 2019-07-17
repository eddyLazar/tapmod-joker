This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Joker Project

[http://tapmod.studio/joker/](http://tapmod.studio/joker/)

## Naming Conventions

### Naming Components

see more [link](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505)

[Domain]|[Page/Context]|ComponentName|[Type]

Exmaples: `UserCreateButton`, `GamesTypeSelect`

## Folder structure

This project leverages the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) (see also [about atomic desing in react](https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262)) methodology to create a scalable and easy to maintain component folder structure.

> In short, Atomic Design is a methodology proposed by [**@bradfrost**](https://github.com/bradfrost) by which you can better organize your UI components. It can be done by separating components in `atoms`, `molecules`, `organisms`, `pages` and `templates`.

### Atoms

An atom is a native html tag, a React Component that renders an html tag or any third party component:

```jsx
const Label = props => <label {...props} />;
```

### Molecules

A molecule is a group of atoms:

```jsx
const Field = ({ label, ...inputProps }) => (
  <Label>
    {label}
    <Input {...inputProps} />
  <Label>
)
```

### Organisms

An organism is a group of atoms, molecules and/or other organisms:

<sub>**organisms/Form.js**</sub>

```jsx
const Form = (props) => (
  <form {...props}>
    <Field label="Name" type="text" />
    <Field label="Email" type="email" />
  <form>
)
```

### Pages

A page is... well, a page, where you will put mostly (but not exclusively) organisms:

<sub>**pages/HomePage.js**</sub>

```jsx
const HomePage = () => (
  <PageTemplate header={<Header />}>
    <Form />
  </PageTemplate>
);
```

### Templates

A template is a layout to be used on pages, see [why templates are good practice](https://github.com/diegohaz/arc/issues/20#issuecomment-265934388):

```jsx
const PageTemplate = ({ header, children }) => (
  <main>
    {header && <div>{header}</div>}
    {children}
  </main>
);
```
