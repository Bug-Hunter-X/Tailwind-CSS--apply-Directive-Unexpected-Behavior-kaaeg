```javascript
// Example showing an unexpected behavior in Tailwind CSS's `@apply` directive
<div class="bg-gray-100 p-4">
  <div class="@apply bg-red-500 p-2">
    This text should have a red background and padding.
  </div>
</div>
```