import { redirect } from 'next/navigation'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug
  redirect(`/doc/${slug}`)
}
