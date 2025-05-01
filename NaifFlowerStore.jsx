import React from "react";

const NaifFlowerStore = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#fff8f4', color: '#333' }}>
      <header style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fff' }}>
        <h1>Naif Flower Store</h1>
      </header>

      <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '2rem' }}>
        {["/images/rose.jpg", "/images/gerbera.jpg", "/images/lily.jpg"].map((src, index) => (
          <div key={index} style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', textAlign: 'center', padding: '1rem', width: '150px' }}>
            <img src={src} alt="Flower" style={{ width: '100%', borderRadius: '8px' }} />
            <p>{["Roses", "Gerberas", "Lilies"][index]}</p>
          </div>
        ))}
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-between', padding: '3rem', alignItems: 'center' }}>
        <div style={{ maxWidth: '50%' }}>
          <h2>Shop by Type</h2>
          <p>Discover our collection of handcrafted bouquets, perfect for any occasion and tastefully arranged.</p>
          <button style={{ padding: '0.5rem 1.5rem', backgroundColor: '#f4a896', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '1rem' }}>Shop Now</button>
        </div>
        <img src="/images/bouquet.jpg" alt="Bouquet" style={{ maxWidth: '40%', borderRadius: '10px' }} />
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-between', padding: '3rem', alignItems: 'center' }}>
        <div style={{ maxWidth: '50%' }}>
          <h2>About Us</h2>
          <p>Bringing elegance and beauty into your home with exquisite arrangements.</p>
        </div>
        <img src="/images/aboutus.jpg" alt="About Us" style={{ maxWidth: '40%', borderRadius: '10px' }} />
      </section>

      <section style={{ padding: '3rem', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center' }}>Place Your Order</h2>
        <form style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Your Name" required style={{ padding: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Email Address" required style={{ padding: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="text" placeholder="Address" required style={{ padding: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
          <select style={{ padding: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option>Select Flower Type</option>
            <option>Roses</option>
            <option>Gerberas</option>
            <option>Lilies</option>
          </select>
          <button type="submit" style={{ padding: '1rem', backgroundColor: '#f4a896', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Place Order</button>
        </form>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fff', fontSize: '0.9rem' }}>
        &copy; 2025 Naif Flower Store. All rights reserved.
      </footer>
    </div>
  );
};

export default NaifFlowerStore;
