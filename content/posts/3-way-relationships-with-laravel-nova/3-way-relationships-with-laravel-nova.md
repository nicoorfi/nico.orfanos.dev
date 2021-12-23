---
title: 3-Way Relationships with Laravel Nova
description: Displaying the contents of the intermediate pivot Table Model in Laravel Nova.
date: 2021-03-12T00:00:00.000Z
---

 In some cases you may have a 3-Way **Pivot** table where you wan't to display only the related 
 records in the **Resource Show** page. 

 Imagine having a database structure like below:
 ```
 rooms
     id - integer
     number - string

 reservation
     id - integer
     number - string

 guest
     id - integer
     name - string

 room_reservation_guest
     reservation_id - integer
     room_id - integer
     guest_id - integer
 ```

 where you want to display the guests with their room number in the reservation show page like below.

![Reservation Show Page](img/nova-reservation-show.png)

 In order to achieve this you will need to define a [custom intermediate Table Model](https://laravel.com/docs/8.x/eloquent-relationships#defining-custom-intermediate-table-models) 
 and it's `belongsTo` method.

 In our case:
 ```php
 namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

 class RoomReservationGuest extends Pivot
 {
     public function reservation()
     {
         return $this->belongsTo(Reservation::class);
     }
     public function guest()
     {
         return $this->belongsTo(Guest::class);
     }
     public function room()
     {
         return $this->belongsTo(Room::class);
     }
 }
 ```

 Next in the `Reservation` Model define a function which will return the **intermediate table model**.

 ```php
 public function roomGuests()
 {
     return $this->hasMany(RoomReservationGuest::class);
 }
 ```

 After [create a Nova resource](./../resources/#defining-resources) for the `RoomReservationGuest` model and define it's fields.

 ```php
 public function fields(Request $request)
 {
     return [
         BelongsTo::make('Guest', 'guest', Guest::class),
         BelongsTo::make('Room', 'room', Room::class),
     ];
 }
 ```

Last define a `HasMany` field in the `Reservation` resource for the `RoomReservationGuest` relation.
 ```php
 public function fields(Request $request)
 {
     return [
         // ... 
         HasMany::make('Guests', 'roomGuests', RoomReservationGuest::class),
     ];
 }
 ```
