Component Architecture diagram:

![image](https://user-images.githubusercontent.com/92960836/224126248-e64d1681-d8aa-41b4-9b32-695a619ed6ef.png)

output:
Resources available :

![image](https://user-images.githubusercontent.com/92960836/224307282-35a4dc5d-5335-4a3b-84e7-ec966f1bd3f9.png)

1.on page load: showing 20 products

![image](https://user-images.githubusercontent.com/92960836/224308028-c1444dee-4f4f-4f3b-befb-12584ba06b9c.png)

![image](https://user-images.githubusercontent.com/92960836/224308168-95b6b2a6-9b2f-4f3b-845a-9a910ca1c003.png)

2.FILTER
2.1 filter products < 20 
result= 6 products

![image](https://user-images.githubusercontent.com/92960836/224308247-40980e06-8a49-42b0-97b5-d5bbab0f981c.png)

2.2 filter products <20 & products <50
result= 9 products

![image](https://user-images.githubusercontent.com/92960836/224308462-97553e39-d4c5-48c7-891f-ce4020c5578d.png)

2.3 Remove filter < 50
result = 6 products

![image](https://user-images.githubusercontent.com/92960836/224308634-28e38cf8-1ada-4b74-958d-125c492db025.png)

2.4 Reset filter :
result = 20 products

![image](https://user-images.githubusercontent.com/92960836/224308748-1fcfaeea-5228-468e-9a25-f15782e573ea.png)

3. EDIT
3.1 Edit product id=1

Loaded product details into Edit form:

![image](https://user-images.githubusercontent.com/92960836/224310192-e9dc8b08-28cf-4283-bfd5-2b647b3958d9.png)

3.2 edited product 1 title,price :

![image](https://user-images.githubusercontent.com/92960836/224310435-db28d81e-002c-4f3c-951a-493be6778a3c.png)

3.3 PATCH request:

![image](https://user-images.githubusercontent.com/92960836/224310651-637ff4a2-369e-4468-baf6-961f42302660.png)

3.4 updated db.json: product 1 updated

![image](https://user-images.githubusercontent.com/92960836/224315086-8c1fa52a-c7d2-40d0-9494-cf2536f73437.png)

3.5 Front end updated: product 1 updated

![image](https://user-images.githubusercontent.com/92960836/224310933-47ff1aa1-d5b6-41c8-8d70-31e7940468d5.png)

4. DELETE
4.1 Delete product 2:

DELETE request:

![image](https://user-images.githubusercontent.com/92960836/224311166-852a62c2-cfbd-4c24-b2ea-a2fa41ffdc55.png)

4.2 db.json updated: product 2 deleted 

![image](https://user-images.githubusercontent.com/92960836/224315128-d0528827-9562-493f-a763-43f9a9dee036.png)

4.3 Front end updated: product 2 deleted 

![image](https://user-images.githubusercontent.com/92960836/224311257-92260975-2cbf-43b5-a37c-b718430fddcd.png)

5 Add 
5.1 Fill Add form:

![image](https://user-images.githubusercontent.com/92960836/224311996-b294f75f-a350-4e88-88bd-3f610dd0a0da.png)

5.2 POST request:

![image](https://user-images.githubusercontent.com/92960836/224312145-aa865591-dea5-4618-8eca-eb4bad3a7b2d.png)

5.3 db.json: product 21 added

![image](https://user-images.githubusercontent.com/92960836/224318635-60d0d8cc-b120-460f-8dfb-5b11c51be150.png)

5.4 Frontend updated: product 21 added

![image](https://user-images.githubusercontent.com/92960836/224312251-28d22a98-96c7-4fff-9d7e-ed4cf1a510d6.png)












# useReducer-useContext-json-server-CRUD-Products
