export function Preview({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="custom_Preview" >
      <img
        src={src}
        alt={alt ?? ''}
        style={{
          maxWidth: 320,
          width: '100%',
          display: 'block',
        }}
      />
    </div>
  )
}
