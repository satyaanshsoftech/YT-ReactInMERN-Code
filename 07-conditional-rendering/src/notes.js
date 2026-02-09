

 1   if 
// if (isLoggedIn)
// {
//   return <RenderList3/>
// }
// return <LoginForm/>
  
 




2. ?:

// ternary operator
// return  (
//     <>
//       {isLoggedIn?(<RenderList3/>):(<LoginForm/>)}
//     </>
//   )


3. 

function App() {
  let isLoggedIn = true;
  return <>{isLoggedIn && <RenderList3 />}</>;
}
 
4.

function App() {
  let isLoggedIn = true;
  switch (isLoggedIn) {
    case true:
      return <LoginForm />;

    case false:
      return <RenderList3 />;
  }
}
 