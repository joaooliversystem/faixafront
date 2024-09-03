async function GoogleBanner() {
  return (
    <div className="card">
      <div
        style={{
          backgroundImage: `url(/files/images/google_banner.png)`,
          height: "235px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default GoogleBanner;