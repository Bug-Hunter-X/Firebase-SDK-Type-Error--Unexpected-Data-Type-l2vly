To solve this issue, add explicit type checking to your code.  Here's an example using TypeScript:
```typescript
interface MyData {
  name: string;
  value: number;
}

db.ref('myData').once('value').then((snapshot) => {
  const data = snapshot.val() as MyData; // Type assertion
  console.log(data.name); // Safe to access name as string
  console.log(data.value); // Safe to access value as number
});
```
If you are not using TypeScript, you can add runtime checks:
```javascript
db.ref('myData').once('value').then((snapshot) => {
  const data = snapshot.val();
  if (typeof data.name === 'string' && typeof data.value === 'number') {
    console.log(data.name);
    console.log(data.value);
  } else {
    console.error('Unexpected data type');
  }
});
```
This ensures that your code handles unexpected data types gracefully, preventing runtime errors.