import React from "react";
import axios from "axios";

export default class Bullshits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bullshits: [] };
  }

  componentDidMount() {
    axios.get(`https://koodihaaste.appspot.com/`).then(res => {
      const bullshits = res.data;
      this.setState({ bullshits });
      console.log(this.state);
    });
  }

  render() {
    
    switch (this.props.processStep) {
      case 0:
        return (
          <div>
          </div>
        );
      case 1:
        return (
          <div>
            {this.state.bullshits.map((bullshit, index) => (
              <p className="message" key={index}>
                {bullshit.message}
              </p>
            ))}
          </div>
        );
      case 2:
        return (
          <div>
            {this.state.bullshits.map((bullshit, index) => (
              <p className="message" key={index}>
                {bullshit.likely_correct_message}
              </p>
            ))}
          </div>
        );
      case 3:
        return (
          <div>
            <div className="half">
              <h2>No bullshit</h2>
              {this.state.bullshits
                .filter(
                  bullshit =>
                    bullshit.last_letter_score === 0 &&
                    bullshit.last_two_letter_score === 0 &&
                    bullshit.first_two_letter_score === 0
                )
                .map((bullshit, index) => (
                  <p className="message" key={index}>
                    {bullshit.likely_correct_message}
                  </p>
                ))}
            </div>
            <div className="half">
              <h2>Bullshit</h2>
              {this.state.bullshits
                .filter(
                  bullshit =>
                    bullshit.last_letter_score !== 0 ||
                    bullshit.last_two_letter_score !== 0 ||
                    bullshit.first_two_letter_score !== 0
                )
                .map((bullshit, index) => (
                  <p className="message" key={index}>
                    {bullshit.likely_correct_message}
                  </p>
                ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div className="half">
              <h2>No bullshit</h2>
              {this.state.bullshits
                .filter(
                  bullshit =>
                    bullshit.last_letter_score === 0 &&
                    bullshit.last_two_letter_score === 0 &&
                    bullshit.first_two_letter_score === 0 &&
                    bullshit.fonotactics_score === 0
                )
                .map((bullshit, index) => (
                  <p className="message" key={index}>
                    <span>{bullshit.likely_correct_message}</span>
                  </p>
                ))}
            </div>
            <div className="half">
              <h2>Bullshit</h2>
              {this.state.bullshits
                .filter(
                  bullshit =>
                    bullshit.last_letter_score !== 0 ||
                    bullshit.last_two_letter_score !== 0 ||
                    bullshit.first_two_letter_score !== 0 ||
                    bullshit.fonotactics_score !== 0
                )
                .map((bullshit, index) => (
                  <p className="message" key={index}>
                    <span>{bullshit.likely_correct_message}</span>
                  </p>
                ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <div className="half">
              <h2>No bullshit</h2>
              {this.state.bullshits
                .filter(
                  bullshit =>
                    bullshit.last_letter_score === 0 &&
                    bullshit.last_two_letter_score === 0 &&
                    bullshit.first_two_letter_score === 0 &&
                    bullshit.fonotactics_score === 0 &&
                    bullshit.word_score > 0.00003
                )
                .map((bullshit, index) => (
                  <p className="message" key={index}>
                    {bullshit.likely_correct_message}
                  </p>
                ))}
            </div>
            <div className="half">
              <h2>Bullshit</h2>
              {this.state.bullshits
                .filter(
                  bullshit =>
                    bullshit.last_letter_score !== 0 ||
                    bullshit.last_two_letter_score !== 0 ||
                    bullshit.first_two_letter_score !== 0 || 
                    bullshit.fonotactics_score !== 0 ||
                    bullshit.word_score <= 0.00003
                )
                .map((bullshit, index) => (
                  <p className="message" key={index}>
                    {bullshit.likely_correct_message}
                  </p>
                ))}
            </div>
          </div>
        );
      default:
          return (
            <div>
              <div className="half">
                <h2>No bullshit</h2>
                {this.state.bullshits
                  .filter(
                    bullshit =>
                      bullshit.last_letter_score === 0 &&
                      bullshit.last_two_letter_score === 0 &&
                      bullshit.first_two_letter_score === 0 &&
                      bullshit.fonotactics_score === 0 &&
                      bullshit.word_score > 0.00003
                  )
                  .map((bullshit, index) => (
                    <p className="message" key={index}>
                      {bullshit.likely_correct_message}
                    </p>
                  ))}
              </div>
              <div className="half">
                <h2>Bullshit</h2>
                {this.state.bullshits
                  .filter(
                    bullshit =>
                      bullshit.last_letter_score !== 0 ||
                      bullshit.last_two_letter_score !== 0 ||
                      bullshit.first_two_letter_score !== 0 || 
                      bullshit.fonotactics_score !== 0 ||
                      bullshit.word_score <= 0.00003
                  )
                  .map((bullshit, index) => (
                    <p className="message" key={index}>
                      {bullshit.message}
                    </p>
                  ))}
              </div>
            </div>
          );
    }
  }
}
