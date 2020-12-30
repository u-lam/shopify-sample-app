import { Component } from "react";
import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  TextField
} from "@shopify/polaris";

class AnnotatedLayout extends Component {
  state = { discount: "10%" };

  handleSubmit = () => {
    this.setState({
      discount: this.state.discount
    });
    console.log("submission", this.state);
  };

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };

  render() {
    const { discount } = this.state;
    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title='Default discount'
            description='Add a product to Sample App, it will automatically be DISCOUNTED.'
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange("discount")}
                    label='Discount PERCENTAGE'
                    type='discount'
                  />
                  <Stack distribution='trailing'>
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
}

export default AnnotatedLayout;
