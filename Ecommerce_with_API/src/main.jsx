import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/* <div className="mb-4">
<label htmlFor="categories" className="mr-2">Filter by Category:</label>
<select
  id="categories"
  value={selectedCategory}
  onChange={(e) => handleCategoryChange(e.target.value)}
  className="p-2 border rounded"
>
  <option value="">All</option>
  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>
</div>
<div className="grid grid-cols-4 gap-4">
{products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
</div>
*/