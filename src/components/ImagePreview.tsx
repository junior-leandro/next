
import Image from "next/image";
import Link from "next/link";



export default function ImagePreview({ thumbnailUrl, nasaId }) {
    return (
        <div className="w-screen flex justify-center items-center">
            <Link as={`/photo/${nasaId}`} href="/photo/[id]">
                <a>
                    <Image width={250} height={250} src={thumbnailUrl} alt="PIC" />
                    <div>Nasa ID: {nasaId}</div>
                </a>

            </Link>
        </div>
    );
}