import Link from "next/link"

export default function SimplifiedLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`block ${className}`}>
      <div className="simplified-logo">
        <span className="ec-text">EC</span>
        <span className="plumbing-text">PLUMBING</span>
      </div>
    </Link>
  )
}
