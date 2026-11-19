type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id: string
  centered?: boolean
}

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? ' section-heading--centered' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}

export default SectionHeading
