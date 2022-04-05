# Many duplicates

You are given an object, in which every property is an array of strings. E.g.

```json
{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"]
}
```

Create a function that returns an object with the same keys, but each string can only appear once. E.g.

```json
{
  "1": ["C"],
  "2": ["A", "B", "D"]
}
```

## Rules

Keys should be compared as numbers: whenever two keys share the same string, the keys are compared numerically and the numerically largest key will keep the string. That's why, in the example above, key "2" contains "A" and "B", as `2 > 1`.

If duplicate strings are found in the same array, the first occurance is kept.

Order matters. The order of keys in the returned object should be from smallest to largest. And the order of strings in each array should be kept the same, with the exception of any removed strings.

## Example 1

Input:

```json
{
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"]
}
```

Output:

```json
{
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"]
}
```

## Example 2

Input:

```json
{
  "1": ["A"],
  "2": ["A"],
  "3": ["A"]
}
```

Output:

```json
{
  "1": [],
  "2": [],
  "3": ["A"]
}
```

## Example 3

Input:

```json
{
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"]
}
```

Output:

```json
{
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"]
}
```
