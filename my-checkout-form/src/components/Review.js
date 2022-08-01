import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Golf Flag short-sleeve pocket tee',
    desc: '',
    price: '$9.99',
  },
  {
    name: 'Stars and stripes whale dot performance',
    desc: '',
    price: '$5.45',
  },
  {
    name: 'On-The-Go Blazer',
    desc: '',
    price: '$16.51',
  },
  {
    name: '9-inch pipe boardshorts',
    desc: '',
    price: '$44.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['x xxx xxxxx', 'xxxxxxxxxx', 'xxxxx', 'xxxxx', 'xxx'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr/Mrs xxx Johnson' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 0, px: 0 }}>
            <ListItemText primary={product.name}  secondary={product.desc} /><img src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw13541b3d/images/2022/1V016616_039_LD_0331_B.jpg?sw=1184&sh=1410&sm=cut&strip=false" alt="VVL"width="130px"height="75px"></img>
            <Typography variant="body2">{product.price}</Typography>

          </ListItem>
        ))}

        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $76.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>xxxx xxxxx</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}