import CataloguePage from "@/components/catalogue/CataloguePage";

export const dynamic = "force-static";
export const revalidate = false;

export default function Catalogue(): JSX.Element {
  return <CataloguePage />;
}
