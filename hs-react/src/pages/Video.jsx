export default function Video() {
  return (
    <div className="container" style={{ paddingTop: 80 }}>
      <h2>Video Test</h2>
      <video controls style={{ width: '100%', maxWidth: 800 }}>
        <source src="video/header-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
