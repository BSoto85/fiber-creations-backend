-- db/seed.sql
\c fiber_creations

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW()),
('bsoto85', '$2b$10$Sg80ws7frhgnX2sn5jOYDO2FfMjgFP6P4bi6wjXXn8xJaPkUCc4sa', 'bsoto@example.com', NOW(), NOW());

INSERT INTO creations (creation_type, stitch, material, image, description, for_sale, price, is_favorite, created_at, updated_at, user_id)
VALUES
('Blanket', 'Granny', 'Acrylic', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712593743/20170502_233420_zzn45b.jpg', 'Alternating mint, white, and grey granny square blanket made using worsted weight Caron One Pound yarn. About 36x36in.', false, NULL, true, '2017-05-02', '2022-10-14', 1),
('Scarf', NULL, 'Acrylic', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712594149/20170908_163338_zajjuq.jpg', 'Taupe scarf with matching hat.', true, 29.99, false, '2017-09-08', NULL, 2),
('Hat', 'Double crochet', 'Acrylic', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712594483/20171129_050344_enib5i.jpg', 'Red and grey striped monster hat with teal accents and button eyes.', false, NULL, true, '2017-11-29', NULL, 2),
('Blanket', 'Bobbles', 'Acrylic', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712594889/20180610_170931_edewtq.jpg', 'Grey and pink baby blanket. Grey is double crochet an dthe pink is a bobble stitch. 36x36in.', false, NULL, true, '2018-06-10', NULL, 1),
('Doily', NULL, 'Cotton', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712595222/IMG_3919_hxt9yo.jpg', 'Blue heart doily with white trim. 10in.', true, 14.99, true, '2020-04-19', NULL, 2),
('Hat', 'Double crochet', 'Acrylic', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712595598/FB_IMG_1459130683253_bq9ywo.jpg', 'Toddler minion hat with blue ear flaps.', false, NULL, false, '2018-10-27', NULL, 2),
('Doily', NULL, 'Cotton', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712595912/IMG_5084_sxfylj.jpg', 'White cotton pineapple doily. 40x12in.', true, 79.99, false, '2021-05-31', NULL, 1),
('Blanket', 'Virus pattern', 'Acrylic', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712613845/20180805_123500_qt4glj.jpg', 'Square virus pattern baby blanket. Used the colors purple, white, grey, yellow, and teal, with a teal ribbon woven around the edge.', false, NULL, true, '2018-08-05', NULL, 2),
('Amigurumi', NULL, 'Acrylic', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712614182/IMG_5362_ro39m2.jpg', 'First attempt at an amigurumi. Cat made in the image of a friends late kitty. 12in tall.', false, NULL, false, '2021-08-24', NULL, 1),
('Scarf', 'Waffle', 'Acrylic', 'https://res.cloudinary.com/dnqfg86zq/image/upload/c_fill,w_300,h_300/v1712614436/IMG_3671_xnpv6m.jpg', '6ft scarf made with variegated yarn using the waffle stitch.', true, 19.99, false, '2020-03-01', NULL, 1);