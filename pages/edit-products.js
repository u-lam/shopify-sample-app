import { Component } from "react";
import {
  Card,
  DisplayText,
  Form,
  FormLayout,
  Page,
  PageActions,
  TextField,
  Layout
} from "@shopify/polaris";
import store from "store-js";

class EditProduct extends Component {
  state = {
    discount: "",
    price: "",
    variantId: ""
  };

  itemToBeConsumed = () => {
    const item = store.get("item");
    const price = item.variants.edges[0].node.price;
    const variantId = item.variants.edges[0].node.id;
    const discounter = price * 0.1;
    this.setState({ price, variantId });
    return (price - discounter).toFixed(2);
  };

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };

  componentDidMount() {
    this.setState({ discount: this.itemToBeConsumed() });
  }

  render() {
    const { discount, price, variantId } = this.state;

    return (
      <Page>
        <Layout>
          <Layout.Section>
            <DisplayText size='large'>{name}</DisplayText>
            <Form>
              <Card sectioned>
                <FormLayout>
                  <FormLayout.Group>
                    <TextField
                      prefix='$'
                      value={price}
                      disabled={true}
                      label='Original Price'
                      type='price'
                    />
                    <TextField
                      prefix='$'
                      value={discount}
                      onChange={this.handleChange("discount")}
                      label='Discounted Price'
                      type='discount'
                    />
                  </FormLayout.Group>
                  <p>This sale price will expire in 2 weeks</p>
                </FormLayout>
              </Card>
              <PageActions
                primaryAction={[
                  {
                    content: "Save",
                    onAction: () => console.log("submitted")
                  }
                ]}
                secondaryActions={[
                  {
                    content: "Remove discount"
                  }
                ]}
              />
            </Form>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default EditProduct;
