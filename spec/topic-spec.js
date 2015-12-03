var Topic = require( "../topic" );

describe( "A topic", function(){
  var api;

  beforeEach(function(){
    api = new Topic("api");
  });

  it( "should have a name", function(){
    expect( api.name ).toBeDefined();
  });

  it("should have a tags json and third party", function () {
    expect ( api.tags ).toContain("JSON", "Third Party");
  });

  describe("A snowman named Olaf", function(){
    var frosty;
    it( "should like warm hugs", function(){
      frosty = new Snowman("Frosty");
      expect( olaf.hug() ).toBe( "I like warm hugs!" );
      expect( frosty.hug() ).not.toBe( "I like warm hugs!" );
    });
  });

});
