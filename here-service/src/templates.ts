const ftSubscription = `{
    "reciver_id": {{1}}
    "function_name": "ft_transfer_call",
    "args": {
        "amount": "{{2}}", 
        "reciver": "proxy.near",
        “id”: "{{3}}"
    },
    "near_amount": 1,
    "gas": 25000000000000
}`;

const nearSubscription = `{
    "reciver_id": "proxy.near"
    "function_name": "proxy_near",
    "args": {
        “id”: "{{1}}"
    },
    "near_amount": {{2}},
    "gas": 25000000000000
}`;
