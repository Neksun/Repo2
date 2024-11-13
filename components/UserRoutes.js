export const UserRoutes = () => {
    return (
      <>
        <NavLink to="/"> Index </NavLink>
        <NavLink to="about"> About </NavLink>
        <NavLink to="products"> Products </NavLink>
        <NavLink to="search"> Search </NavLink>
        <NavLink to="login"> Login </NavLink>
  
        <Routes>
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </>
    );
  };
  