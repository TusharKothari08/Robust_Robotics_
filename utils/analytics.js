// export const loadAnalytics = () => {
//     if (window.gtag) return;
  
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
//     document.head.appendChild(script);
  
//     window.dataLayer = window.dataLayer || [];
  
//     function gtag(){window.dataLayer.push(arguments);}
//     window.gtag = gtag;
  
//     window.gtag("js", new Date());
  
//     window.gtag("config", import.meta.env.VITE_GA_ID, {
//       page_path: window.location.pathname,
//     });
//   };
export const loadAnalytics = () => {

  if (window.gtag) return;

  // Load GA Script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;

  window.gtag("js", new Date());

  // DEFAULT: DENY ALL TRACKING
  window.gtag("consent", "default", {
    analytics_storage: "denied"
  });

};

export const enableAnalytics = () => {

  if (!window.gtag) return;

  window.gtag("consent", "update", {
    analytics_storage: "granted"
  });

  window.gtag("config", import.meta.env.VITE_GA_ID, {
    page_path: window.location.pathname,
  });

};