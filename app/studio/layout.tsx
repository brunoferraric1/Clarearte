// Use dynamic import to avoid fast refresh issues
const studioModule = await import('next-sanity/studio')
export const { metadata, viewport } = studioModule

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
