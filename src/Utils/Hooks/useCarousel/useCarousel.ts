import React, { useEffect, useState } from "react";

const useCarousel = (slider: HTMLElement | null, offset: number) => {
  const [showBtnLeft, setShowBtnLeft] = useState(false);
  const [showBtnRight, setShowBtnRight] = useState(false);
  const [scroll, setScroll] = useState(0);

  const parent = slider?.parentElement;
  const sliderWidth = slider?.scrollWidth || 0;
  const scrollStep = sliderWidth ? Math.round(sliderWidth / offset) : 0;
  const maxScroll = slider ? sliderWidth - slider.clientWidth : 0;

  useEffect(() => {
    if (!parent || !sliderWidth) return;

    if (sliderWidth > parent.clientWidth) {
      setShowBtnRight(true);
      scroll > 0 && setShowBtnLeft(true);
    }
  }, [slider]);

  useEffect(() => {
    if (!slider) return;
    slider.scrollLeft = scroll;
    if (scroll <= 0) return setShowBtnLeft(false);
    if (scroll >= maxScroll) return setShowBtnRight(false);
    if (!showBtnLeft) setShowBtnLeft(true);
    if (!showBtnRight) setShowBtnRight(true);
  }, [scroll]);

  const slideRight = () => {
    if (!slider || !sliderWidth) return;

    if (slider.scrollLeft + scrollStep > maxScroll) setScroll(maxScroll);

    setScroll(scroll + scrollStep);
  };
  const slideLeft = () => {
    if (!slider || !sliderWidth) return;

    if (slider.scrollLeft - scrollStep <= 0) setScroll(0);

    setScroll(scroll - scrollStep);
  };

  return { showBtnLeft, showBtnRight, slideRight, slideLeft };
};

export default useCarousel;
