import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Post image.
   */
  photo?: ImageWidget;
  /**
   * @title Post body.
   * @format textarea
   */
  post: string;
  /**
   * @title Publish date.
   * @format datetime
   */
  datetime: string;
  /**
   * @title Post title.
   */
  title: string;
}

export default function Post({ title, photo, datetime, post }: Props) {
  return (
    <div>
      {photo && (
        <Image
          src={photo}
          alt={`${title} image`}
          height={300}
          width={300}
          class="rounded"
        />
      )}
      <h1 class="font-bold text-lg text-primary">{title}</h1>
      <p>Published at: {datetime}</p>
      <p>This is an example section</p>
      <p>{post}</p>
    </div>
  );
}