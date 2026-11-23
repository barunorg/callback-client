---
name: code-style
description: A set of coding style rules and guidelines for the project whenever writing the code for the project. This is to ensure that the code is consistent and maintainable across the project.
---

## Try to use the semantic HTML tags as much as possible. For example, use `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, etc., instead of generic `<div>` tags as much as possible where it makes sense so that the HTML structure is more meaningful and accessible as well as SEO friendly. I want to harness the full potential power of semantic HTML to improve the overall quality and accessibility of the web pages. But for the prebuilt component use shadcn library if it is available for the component you want to use. For example, if you want to use a button then use the shadcn button component instead of creating your own button component.

## Use lucide icons for all the icons in the project.

## Always try to use teh react standard of giving the component name in PascalCase format. For example, use `ComponentName` instead of `componentname` or `component-name`.

## Use the tailwind for styling the ract based compnent as much as possible and if you need to use any custom css then create a new css file in the same folder as the component and import it in the component file but try to use tailwind capibilities as much as possible.

## Creating the any new react component

```
export default function ComponentName() {
  return (
    <div>
      {/* Your component code here */}
    </div>
  );
}
```

## Creating the any new react component with props

```
export default function ComponentName({ prop1, prop2 }: { prop1: string; prop2: number }) {
  return (
    <div>
      {/* Your component code here */}
    </div>
  );
}
```

##
