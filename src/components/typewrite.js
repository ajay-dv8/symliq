"use client"; 
import { cn } from "@/lib/utils";
import React from "react";

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.period = 900; // Adjust typing speed
    this.isDeleting = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) return;

    const { data: toRotate } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    let newText = "";
    if (this.isDeleting) {
      newText = fullTxt.substring(0, this.state.text.length - 1);
    } else {
      newText = fullTxt.substring(0, this.state.text.length + 1);
    }

    let delta = 200 - Math.random() * 250; // Typing speed

    if (this.isDeleting) {
      delta /= 2; // Faster when deleting
    }

    if (!this.isDeleting && newText === fullTxt) {
      delta = 4000; // 4-second pause after typing the sentence
      this.isDeleting = true;
    } else if (this.isDeleting && newText === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500; // Pause before typing the next sentence
    }

    this.setState({ text: newText });

    setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    const { className } = this.props;

    return <p className={cn("inline-block text-colorDark", className)}>{this.state.text}.</p>;
  }
}

export default TypeWriter;


 