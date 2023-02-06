import React, { useState, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormControl, ButtonToolbar, FormGroup, ControlLabel, HelpBlock, Nav } from 'rsuite';
import { Link } from 'react-router-dom';

import { CollectionEditor } from '../../../src/components';
//import TextareaAutosize from '../../../src/components';
//import Components from '../../../src/ui';
//from '../../src/components


// TODO cleanup

// TODO for iphone aggiungere un margin top

const FormCommand = ({ value, onChange, disabled = false }) => (
  <div>
    <textarea
      className="rs-input"
      disabled={disabled}
      placeholder=""
      onChange={e => onChange({ ...value, sentence: e.target.value })}
    >{value.sentence}</textarea>
  </div>
);
FormCommand.propTypes = {
  value: PropTypes.shape({
    sentence: PropTypes.string
  }),
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};



const ConfigurationForm = ({
  value,
  onSubmit = () => { },
  disabled = false
}) => {
  const [formValue, setFormValue] = useState(value);
  const [formError, setFormError] = useState(null);
  const [tab, setTab] = useState('landing-page');
  const form = useRef(null);

  return (
    <div>
      <Nav appearance="tabs" activeKey={tab} onSelect={setTab} style={{ marginBottom: '25px' }}>
        <Nav.Item eventKey="landing-page">Landing page</Nav.Item>
        <Nav.Item eventKey="hero">Hero</Nav.Item>
        <Nav.Item eventKey="prompts">Bot Prompts</Nav.Item>
        <Nav.Item eventKey="links">Links</Nav.Item>
      </Nav>
      <Form
        disabled={true}
        formValue={formValue}
        formError={formError}
        ref={form}
        checkTrigger="none"
        layout="vertical"
        fluid
        onChange={formValue => {
          setFormValue(formValue);
          setFormError(null);
        }}
        onCheck={errors => {
          setFormError(errors);
        }}
      >
        {tab === 'landing-page' && (
          <Fragment>
            <FormGroup>
              <ControlLabel>Bot Name
                <HelpBlock tooltip>The bot name will be shown in the landing page header</HelpBlock>
              </ControlLabel>
              <FormControl
                name="botName"
                disabled={disabled}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Logo
                <HelpBlock tooltip>Logo in SVG format, suggested size is 88 x 40 pixel</HelpBlock>
              </ControlLabel>
              <FormControl
                name="logo"
                componentClass="textarea"
                readOnly={disabled}
                style={{ height: '200px' }}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Features title
                <HelpBlock tooltip>hero</HelpBlock>
              </ControlLabel>
              <FormControl
                name="featuresTitle"
                disabled={disabled}
              />
              <HelpBlock>Edit the chatbot features <Link to="/landing-page/features">here</Link>.</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Head section
                <HelpBlock tooltip>HTML tags to put in the head section (i.e., Google Analytics, etc)</HelpBlock>
              </ControlLabel>
              <FormControl
                name="head"
                componentClass="textarea"
                readOnly={disabled}
                style={{ height: '200px' }}
              />
            </FormGroup>
          </Fragment>
        )}
        {tab === 'links' && (
          <Fragment>
            <div style={{ marginBottom: '20px' }}>
              Add links to specific chat platforms
            </div>
            <FormGroup>
              <ControlLabel>Telegram URL</ControlLabel>
              <FormControl
                name="urlTelegram"
                disabled={disabled}
                placeholder="i.e. https://t.me/something_bot"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Facebook Messenger URL</ControlLabel>
              <FormControl
                name="urlFacebook"
                disabled={disabled}
                placeholder="i.e. https://www.messenger.com/t/123456789"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Viber URL</ControlLabel>
              <FormControl
                name="urlViber"
                disabled={disabled}
                placeholder="i.e. viber://pa?chatURI=<URI>"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Slack URL</ControlLabel>
              <FormControl
                name="urlSlack"
                disabled={disabled}
                placeholder="i.e. http://something.slack.com"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Microsoft Teams URL</ControlLabel>
              <FormControl
                name="urlTeams"
                disabled={disabled}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Twilio URL</ControlLabel>
              <FormControl
                name="urlTwilio"
                disabled={disabled}
                placeholder="i.e. sms:123456789"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Whatsapp URL</ControlLabel>
              <FormControl
                name="urlWhatsapp"
                placeholder="i.e. https://wa.me/123456789"
                disabled={disabled}
              />
            </FormGroup>
          </Fragment>
        )}
        {tab === 'prompts' && (
          <Fragment>
            <div style={{ marginBottom: '20px' }}>
              Add example sentences for the phone preview
            </div>
            <FormGroup>
              <ControlLabel>Bot Prompts
                <HelpBlock tooltip>Example of interactions with the chatbot in the phone preview</HelpBlock>
              </ControlLabel>
              <FormControl
                name="botPrompts"
                accepter={CollectionEditor}
                form={FormCommand}
                labelAdd="Add prompt"
                disabled={disabled}
                sortable={false}
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>User Prompts
                <HelpBlock tooltip>Example of interactions with the user in the phone preview</HelpBlock>
              </ControlLabel>
              <FormControl
                name="userPrompts"
                accepter={CollectionEditor}
                form={FormCommand}
                labelAdd="Add prompt"
                disabled={disabled}
                sortable={false}
              />
            </FormGroup>
          </Fragment>
         )}
         {tab === 'hero' && (
          <Fragment>
            <FormGroup>
              <ControlLabel>Hero Title
                <HelpBlock tooltip>Title of the hero section</HelpBlock>
              </ControlLabel>
              <FormControl
                name="heroTitle"
                disabled={disabled}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Hero Header
                <HelpBlock tooltip>Header, just above the title, of the hero section</HelpBlock>
              </ControlLabel>
              <FormControl
                name="heroHeader"
                disabled={disabled}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Hero Description
                <HelpBlock tooltip>Descriptio, just below the title, of the hero section</HelpBlock>
              </ControlLabel>
              <FormControl
                name="heroDescription"
                componentClass="textarea"
                readOnly={disabled}
                style={{ width: '100%', minHeight: '200px' }}
              />
            </FormGroup>
          </Fragment>
         )}

        <FormGroup style={{ marginTop: '40px' }}>
          <ButtonToolbar>
            <Button
              disabled={disabled}
              appearance="primary"
              onClick={() => {
                if (!form.current.check()) {
                  return;
                }
                onSubmit(formValue);
              }}>
              Save configuration
              </Button>
            <Button
              disabled={disabled}
              appearance="default"
              onClick={() => {
                if (confirm('Reset configuration?')) {
                  setFormValue(value);
                }
              }}
            >
              Reset
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};
ConfigurationForm.propTypes = {
  value: PropTypes.shape({
    botName: PropTypes.string,
    logo: PropTypes.string,
    featuresTitle: PropTypes.string,
    urlTelegram: PropTypes.string,
    urlFacebook: PropTypes.string,
    urlViber: PropTypes.string,
    urlSlack: PropTypes.string,
    urlTeams: PropTypes.string,
    urlTwilio: PropTypes.string,
    urlWhatsapp: PropTypes.string,
    botPrompts: PropTypes.shape({
      sentence: PropTypes.string
    }),
    userPrompts: PropTypes.shape({
      sentence: PropTypes.string
    }),
    heroTitle: PropTypes.string,
    heroHeader: PropTypes.string,
    heroDescription: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ConfigurationForm;