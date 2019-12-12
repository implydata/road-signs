# road-signs

A light-footprint way of adding in-app directions.

## How to install
`$ npm i --save-dependencies road-signs`

## How to use

Drop as many of those as you want, wherever you want (the `id` property is needed to help showing/hiding signs)

```typescript
<RoadSign
  id="my-sign-id"
  position="left"
  content={<RoadSignContent title="a title" content="some content" />}
>
  <input type="text"/>
</RoadSign>
```

You also have to declare and configure a context value for the signs to read from (usually, this is declared at a somehow top-level in your app):

```typescript
const [context, setContext] = React.useState({
  activeStep: 'first-sign-id',
  enabled: true,
});
```

And then wrap you app in a `DeptOfTransport` context (hey, naming is hard):

```
<DeptOfTransport.Provider value={context}>
  <MyApp/>
</DeptOfTransport.Provider>
```

## How to build
`$ webpack`
