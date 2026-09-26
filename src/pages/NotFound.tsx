import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound({ message = "The page you are looking for does not exist or has moved." }: { message?: string }) {
  usePageMeta("Page not found");

  return (
    <>
      <PageIntro title="Page not found" subtitle={message} />
      <section className="section">
        <Container>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Button to="/">Back to home</Button>
            <Button to="/rooms" variant="outline">View rooms</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
