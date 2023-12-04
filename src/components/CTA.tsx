"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function CTA({ className, style, children }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className={clsx(
          "block w-full transition-colors duration-200 ease-in-out py-4 md:py-6 px-8 md:px-12 font-display font-semibold text-lg md:text-2xl text-center tracking-wide text-white bg-yellow-400 hover:bg-yellow-500",
          className
        )}
        style={style}
        onClick={onOpen}
      >
        {children}
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent style={{ height: "700px", overflowY: "scroll" }}>
          {(onClose) => (
            <>
              <ModalBody style={{ paddingRight: 0, paddingLeft: 0 }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/survey/hFTwQPUJXI9obdqaYZT0"
                  style={{
                    border: "none",
                    height: "900px",
                  }}
                  scrolling="yes"
                  id="hFTwQPUJXI9obdqaYZT0"
                  title="Aumento Pecho"
                  loading="lazy"
                ></iframe>
                <script
                  async={true}
                  src="https://link.msgsndr.com/js/form_embed.js"
                ></script>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
